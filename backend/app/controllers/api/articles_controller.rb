class Api::ArticlesController < ApplicationController
  protect_from_forgery except: :create

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def index
    @articles = Article.all
    render json: @articles
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update_attributes(article_params)
      head :no_content
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end

  private
  def article_params
    params.require(:article).permit(:title, :body)
  end
end
