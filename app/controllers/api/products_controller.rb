class Api::ProductsController < ApplicationController

    def index
        render json: Product.all, status: 200
    end

    def show
        @product = Product.find(params[:id])
        render json: @product, status: 200
    end

    def create 
        product = Product.new(product_params)
        if product.save
            render json: product, status: 201
        else
            render json: { errors: product.errors }, status: 422
        end

    end

    def update
        product = Product.find(params[:id])
        if product.update_attributes(params[:product_params])
            render json: product, status: 200
        else
            render json: { errors: product.errors }, status: 422
        end
    end


    def destroy
        product = Product.find(params[:id])
        if product.destroy
            head :no_content, status: :ok
        end
    end

    private

    def product_params
        params.require(:product).permit(:user_id, :name, :description, :price, :image)
    end
end
