class PromptsController < ApplicationController

    def index
        # byebug
        render json: Prompt.all
    end

end
