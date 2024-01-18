class ItemsController < ApplicationController
  

    def new
      @item = Item.new
    end

    def skill_edit

        # @user = User.find(params[:id])
        # user_id=@user.id
        @category = Category.all
        user_id = params[:user_id]
        @item= Item.find_by(id: params[:id])
        @user = User.find(params[:id])
        @this_month = Date.today.month
        @last_month = Date.today.last_month.month
        @two_months_ago = Date.today.months_since(-2).month
        # @item = Item.where(user_id: user_id)
        # @user = User.where(user_id: user_id)


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
        redirect_to after_delete_url(@item.user_id), status: :see_other
    end

    def update
# debugger
         @item = Item.find(params[:id])

        if @item.update(item_params)
        flash[:success] = " updated"
        # debugger
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