require 'hypernova'
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :hypernova_render_support
end
