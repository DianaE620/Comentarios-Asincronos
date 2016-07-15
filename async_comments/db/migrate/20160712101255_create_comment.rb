class CreateComment < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :mensaje
      t.string :autor
    end
  end
end
