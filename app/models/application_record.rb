class ApplicationRecord < ActiveRecord::Base
  include ActionController::Cookies
  self.abstract_class = true
end
