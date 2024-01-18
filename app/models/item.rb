class Item < ApplicationRecord
    self.primary_key = 'id'
    belongs_to :user, foreign_key: 'user_id'

end
