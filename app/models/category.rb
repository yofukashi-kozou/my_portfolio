class Category < ApplicationRecord
    self.primary_key = 'categories_id'
    has_many :item
end
