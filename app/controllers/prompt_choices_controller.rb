class PromptChoicesController < ApplicationController

    def index
        render json: PromptChoice.all
    end

end
