class ItemsController < ApplicationController
  

    def new
      @item = Item.new
    end




    
    def update_selected_day
        puts "Reached update_selected_day method"  # この行を追加
        selected_day = params[:selectedDay] # JavaScriptから送られたデータを取得
        selected_id = params[:selectedid] 
        selected_no = params[:selectedno] 
        Rails.logger.debug "Selected Day7: #{selected_day.inspect}"
        Rails.logger.debug "Selected Id7: #{selected_id.inspect}"
        Rails.logger.debug "Selected No7: #{selected_no.inspect}"
      
        user_id = params[:selectedid]
        @item = Item.find_by(id: params[:id])
        @user = User.find(params[:id])
        @no = selected_no
      
        if  selected_day == nil
            @selected_day =   @today
            else 
                @selected_day =  selected_day
            end

        Rails.logger.debug "Selected Day3: #{@selected_day.inspect}"
      
        # すでに初期化されている場合は再初期化しないようにする
        @today ||= Date.today
        @last_month_day ||= Date.today.last_month
        @two_months_ago_day ||= Date.today.months_since(-2)
      
        # 適切なデータを取得する処理をここに追加
        # @item =  Item.where(user_id: @user.id ,created_at:  @selected_day.in_time_zone.all_month)
        # redirect_to skill_edit_user_path(selected_day: selected_day, selected_no:  selected_no)
        respond_to do |format|
            format.json { render json: { selected_day: selected_day, selected_no: selected_no } }
          end
          
      end

    def skill_edit
        @user = User.find_by(id: session[:user_id])
         selected_day = params[:selectedDay] # JavaScriptから送られたデータを取得

        selected_id = params[:selectedid] 
        selected_no = params[:selectedno] 
        Rails.logger.debug "Selected Day1: #{selected_day.inspect}"
        Rails.logger.debug "Selected Id1: #{selected_id.inspect}"
        Rails.logger.debug "Selected No1: #{selected_no.inspect}"

        @no=selected_no

        Rails.logger.debug "Selected user: #{@user.inspect}"
        Rails.logger.debug "Selected No2: #{@no.inspect}"

        @category = Category.all
        id = params[:id]
        user_id = Item.find_by(user_id: params[:id])

        Rails.logger.debug "params[:id]: #{id.inspect}"
        Rails.logger.debug "params[:user_id]: #{user_id.inspect}"






        #user_id = params[:user_id]
        # @item= Item.find_by(id: params[:id])
        #@user = User.find(params[:id])
        @today =Date.today
        @last_month_day =Date.today.last_month
        @two_months_ago_day =Date.today.months_since(-2)

        # @selected_day = params.fetch(:selected_day, @today)
        if  selected_day == nil
        @selected_day =   @today
        else 
            @selected_day =  selected_day
        end

        @this_month = Date.today.month
        @last_month = Date.today.last_month.month
        @two_months_ago = Date.today.months_since(-2).month

 
        # if User.find_by(id: params[:id])  == nil
        #     user_id = @item.user_id
        #     @user = User.find(user_id)
        #   else
        #     @user = User.find(params[:id])
        # end

    end
    


    
    def add_items
        @user = User.find_by(id: session[:user_id])
        @item = Item.new
        # @category = Category.find_by!(params[:categories_id])
        @category = Category.find(params[:categories_id])
        user_id = Item.find_by(id: params[:id])
        @user = User.find(params[:id])

    end

    def destroy
        @user = User.find_by(id: session[:user_id])
        @item = Item.find(params[:id])
        @item.destroy

        render json: { deleted_item_id: @item.name }


        # if @item.destroy
        #     item_name = @item.name 
        #     @messege = { 'message' => '削除しました。' }
           
        #     respond_to do |format|      
        #         format.html
        #         format.json { render json: @messege }
        #     end
                
        #     else

        #     messege = "削除失敗"
        #     render json: { messege: messege }
        # end
        # redirect_to skill_edit_user_url, status: :see_other
    end

    def update
        # @item = Item.find_by(id: params[:id])
         @item = Item.find(params[:id])

        #  if @item.update(item_params)
        #     render json: { update_item_id: @item }
        #   else
        #     render json: { error: '更新に失敗しました' }, status: :unprocessable_entity
        #   end

        if @item.update(item_params)
        flash[:success] = " updated"

        puts "Params: #{params.inspect}"
        redirect_to skill_edit_user_url
        else
        puts @item.errors.full_messages
        redirect_to  root_url
        end
    end


  
    def create

        @item= Item.new(create_params)

        if @item.save
            redirect_to skill_edit_user_path, notice: '追加されました' 
        else
        flash.now[:alert] = '追加に失敗しました'
        redirect_to skill_edit_user_path

        end
        end
  
    private
  
    def item_params
        params.require(:item).permit(:learning_time, :id, :categories_id)  
    end

    def create_params
        params.require(:item).permit(:name, :learning_time, :categories_id, :user_id,:id)
    end  
  
  end