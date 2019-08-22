class Api::CommentsController < ApplicationController

    def index
        comments = Comment.all 

        render json: comments
    end

    def show 
        comment = Comment.find(params[:id])

        render json: comment
    end

    def create
        comment = Comment.create(comment:params[:comment], block_id:params[:block_id])
        
        render json: comment
    end

end
