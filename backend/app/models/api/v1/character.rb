class Api::V1::Character < ApplicationRecord
    has_many :quotes
end