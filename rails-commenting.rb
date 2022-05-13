# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The ApplicationController is where coordinates the interaction between the user, the views and the model. def index is a method where we list all of what is in the database. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Below we are linking an instance variable "@posts" to equal BlogPost.all which is all the BlogPost data. 
    @posts = BlogPost.all
  end

  # ---3) Below we have the def show method that displays only a specific BlogPost. so we use find(params[:id]) which gives us the option to narrow down a specific id in our databse. 
   def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Below we have the def new method that creates a new BlogPost. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Below we have the def create method where the @post instance variable to holding that action where it will take in a param. We also have an if/else statement determing whether the post is valid, and if it is it will redirect to the blog_post_path
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The instance variable will search for a specific BlogPost based on the ":id" that is input.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Below we are updating based on what is passed through the param if it is determined valid.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Since we are using the destroy method above, once the data has been destroyed it will redirect to "blog_posts_path", if not it will redirect to "blog_post_path" 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Below we have a private method in which we cant access directly but through objects of the same class. 
  private
  def blog_post_params
    # ---10) Below it is stating that it is required for information to be input through ":blog_post" only, and that the ":title" and ":content" can only be changed
    params.require(:blog_post).permit(:title, :content)
  end
end
