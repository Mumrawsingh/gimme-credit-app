class PromptsController < ApplicationController

    def index
        render json: Prompt.all
    end

end
