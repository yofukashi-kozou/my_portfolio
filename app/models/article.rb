class Article < ApplicationRecord
  self.primary_key = 'skill_id'
  belongs_to :user, foreign_key: 'user_id'
  end