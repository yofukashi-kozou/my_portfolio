# class ArticlesController < ApplicationController
  
#     def new
#         @article = Article.new
#     end

#     def skill_edit
#         @user = User.find(params[:id])
#         user_id=@user.id
#         @category = Category.all
#         @article = Article.find(params[:id])
#     end
    
#     def add_items
#         @article = Article.new
#         @category = Category.find_by!(params[:categories_id])
#         @user = User.find(params[:id])

#     end

#     def destroy
#         @article = Article.find_by!(params[:id])
#         @article.destroy
#         flash[:success] = "deleted"
#         redirect_to users_url, status: :see_other
#     end





#     def update
#         @article = Article.find_by!(params[:id])

#         if @article.update(item_params)
#         flash[:success] = " updated"
#         redirect_to  skill_edit_user_path(@article.user_id)
#         else
#         puts @article.errors.full_messages
#         redirect_to  root_url
#         end
#     end
    
    

    # def create
    #     @article = Aarticle.new(create_params)
    #     @user_id =@article.user_id
    #     @user = User.find(@user_id)

    #     if @article.save
    #         redirect_to skill_edit_user_path(@article.user_id), notice: '追加されました' 
    #     else
    #     flash.now[:alert] = '追加に失敗しました'
    #     redirect_to skill_edit_user_path(@article.user_id)

    #     end
    #     end

    
#     private
    
#     def item_params
#         params.require(:article).permit(:learning_time, :id, :categories_id)  
#     end

#     def create_params
#         params.require(:article).permit(:name, :learning_time, :categories_id, :user_id,:id)
#     end

#     end
    
