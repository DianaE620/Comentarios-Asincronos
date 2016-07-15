$(document).ready(function(){

  $("#new_comment_button").on("click", function(){
    //alert();
    $("#new_comment").show();
  });

  $("#new_comment").on("submit", function(event){
    event.preventDefault();
    //alert();
    var info = $(this).serialize();
    console.log(info)
    $.post("new/comment", info, function(data){
      var new_comment = JSON.parse(data)
      //console.log(new_comment)
      $("#comment_list").append(makeComment(new_comment));
      $("#new_comment").hide();
      var msj = $("#mensaje").val("");
      var autor = $("#authorName").val("");

    });
    /*
    var msj = $("#mensaje").val();
    var autor = $("#authorName").val();

    //console.log(mensaje + " " + autor)
    var comentario = {
      mensaje: msj,
      author: autor
    }

    //console.log(makeComment(comentario))

    $("#comment_list").append(makeComment(comentario));
    */
  });

  function makeComment(json){
    return "<li>" + json.mensaje + "<span class='author'>"+ json.autor +"</span></li>"
  }
 
});