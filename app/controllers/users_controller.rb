class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update] # ログイン済みユーザーのみアクセス可能なアクションを指定
  before_action :correct_user, only: [:edit, :update] # 正しいユーザーのみアクセス可能なアクションを指定

  def show
    @user = User.find(params[:id])

    @today =Date.today
    @last_month_day =Date.today.last_month
    @two_months_ago_day =Date.today.months_since(-2)

    # @item = item.find(params[user_id: user_id])
    @buckend_thismonth_sum = Item.where(user_id: params[:id], categories_id: 1,created_at: @today.in_time_zone.all_month).sum(:learning_time)
    @buckend_lastmonth_sum = Item.where(user_id: params[:id], categories_id: 1,created_at: @last_month_day.in_time_zone.all_month).sum(:learning_time)
    @buckend_two_months_ago_sum = Item.where(user_id: params[:id], categories_id: 1,created_at:  @two_months_ago_day.in_time_zone.all_month).sum(:learning_time)

    @frontend_thismonth_sum = Item.where(user_id: params[:id], categories_id: 2,created_at: @today.in_time_zone.all_month).sum(:learning_time)
    @frontend_lastmonth_sum = Item.where(user_id: params[:id], categories_id: 2,created_at: @last_month_day.in_time_zone.all_month).sum(:learning_time)
    @frontend_two_months_ago_sum = Item.where(user_id: params[:id], categories_id: 2,created_at:  @two_months_ago_day .in_time_zone.all_month).sum(:learning_time)

    @infra_thismonth_sum = Item.where(user_id: params[:id], categories_id: 3,created_at: @today.in_time_zone.all_month).sum(:learning_time)
    @infra_lastmonth_sum = Item.where(user_id: params[:id], categories_id: 3,created_at: @last_month_day.in_time_zone.all_month).sum(:learning_time)
    @infra_two_months_ago_sum = Item.where(user_id: params[:id], categories_id: 3,created_at:  @two_months_ago_day .in_time_zone.all_month).sum(:learning_time)

    # categories_id: 1,created_at:  @selected_day.in_time_zone.all_month
    # created_at:  @selected_day.in_time_zone.all_month)

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      reset_session
      log_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to root_url
    else
      flash[:danger] = 'Invalid email/password combination' # 本当は正しくない
      render 'new', status: :unprocessable_entity
    end
  end

  def edit
    @user = User.find(params[:id])
  end


  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = "Profile updated"
      redirect_to @user
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :introduction,:avatar,:password_confirmation)
    end


    # ログイン済みユーザーかどうか確認
    def logged_in_user
      unless logged_in?
        flash[:danger] = "Please log in."
        redirect_to login_url, status: :forbidden
      end
    end

    # 正しいユーザーかどうか確認
    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url, status: :see_other) unless @user == current_user
    end
end


