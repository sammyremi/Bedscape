class Room < ApplicationRecord
  belongs_to :flat
  has_many :beds, dependent: :destroy
end
