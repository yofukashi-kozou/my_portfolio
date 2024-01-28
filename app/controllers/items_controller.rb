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
        user_id = params[:user_id]
        @item= Item.find_by(id: params[:id])
        @user = User.find(params[:id])
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
        @item = Item.new
        @category = Category.find_by!(params[:categories_id])
        user_id = Item.find_by(id: params[:id])
        @user = User.find(params[:id])

    end

    def destroy

        @item = Item.find(params[:id])
        user_id = @item.user_id 
        @item.destroy
        flash[:success] = "deleted"
        puts "Destroy action successfully executed!" 
        redirect_to after_delete_path, status: :see_other
    end

    def update
# debugger
         @item = Item.find(params[:id])

        if @item.update(item_params)
        flash[:success] = " updated"
        # debugger
        puts "Params: #{params.inspect}"
        redirect_to  after_delete_url(@item.user_id)
        else
        puts @item.errors.full_messages
        redirect_to  root_url
        end
    end


  
    def create
        @item= Item.new(create_params)
        @user_id =@item.user_id
        @user = User.find(@user_id)

        if @item.save
            redirect_to skill_edit_user_path(@item.user_id), notice: '追加されました' 
        else
        flash.now[:alert] = '追加に失敗しました'
        redirect_to skill_edit_user_path(@item.user_id)

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