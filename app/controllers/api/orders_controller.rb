class Api::OrdersController < ApplicationController

    def create
        
        @order = Order.new(order_params)
        # @order.user_id = current_user.id
        render json: @order, status: :created
    end

    def index
        @orders = Order.all
        render json: @orders
    end

    def show
        @order = Order.find(params[:id])
        render json: @order
    end

private

    def order_params
        params.permit(:id, :user_id, :date, :name, :price)
    end
end