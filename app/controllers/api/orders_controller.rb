class Api::OrdersController < ApplicationController

    def create
        # @order = Order.new(order_params)
        # @order.user = current_user
        # render json: @order, status: :created
        # byebug
        if params[:order].is_a? Array
            params[:order].map { |hash| Order.create(order_params(hash)) }
        else
            @order = Order.create(order_params)
        end
        render json: @order
        # byebug
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
        params.permit(:user_id, :name, :price, :qty)
    end

end