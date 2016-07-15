get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  @comentarios = Comment.all
  
  erb :index
end

post '/new/comment' do
  msj = params[:msj]
  author = params[:autor]

  comentario = Comment.new(mensaje: msj, autor: author)
  
  if comentario.save
    hash_comment = {"mensaje" => msj , "autor" => author}
    JSON.generate(hash_comment) 
  end
end