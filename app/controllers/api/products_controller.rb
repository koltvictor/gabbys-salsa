class Api::ProductsController < ApplicationController

    def index
        render json: Product.all, status: 200
    end

    def show
        @product = Product.find(params[:id])
        render json: @product, status: 200
    end
end
