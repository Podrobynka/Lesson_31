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

get '/cart' do
  @products = Product.all
  erb :cart
end

post '/cart' do
  @products = Product.all
  erb :cart
end

get '/order' do
  @orders = Order.all
  erb :orders
end

post '/order' do
  @orders = Order.all
  Order.create(params)
  erb :orders
end

get '/visit' do
  erb :visit
end

post '/visit' do
  erb :visit
end
