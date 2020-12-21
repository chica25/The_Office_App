class Api::V1::Character < ApplicationRecord
    has_many :quotes


    def self.search_name(name)
        name.where('name LIKE ?', "%#{name}%")

    end

end