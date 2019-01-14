require 'rubygems'
require 'sinatra'
require 'sinatra/reloader' # if development?
require 'sinatra/activerecord'

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

get '/' do
  @products = Product.all
  erb :index
end

post '/cart' do
  @orders_input = params[:orders_input]
  @items = parse_orders_line(@orders_input)

  if @items.length == 0
    return erb :cart_is_empty
  end

  @items.each do |item|
    item[0] = Product.find(item[0])
  end

  erb :cart
end

get '/order' do
  @orders = Order.all
  erb :orders
end

post '/place_order' do
  @orders = Order.all
  Order.create(params)
  erb :order_placed
end

def parse_orders_line(orders_input)
  s1 = orders_input.split(/,/)

  arr = []

  s1.each do |x|
    s2 = x.split(/=/)
    s3 = s2[0].split(/_/)

    id = s3[1]
    quantity = s2[1]

    arr2 = [id, quantity]

    arr.push(arr2) unless id.nil?
  end

  arr
end
