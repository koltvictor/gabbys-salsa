class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price
  has_one :user
end
