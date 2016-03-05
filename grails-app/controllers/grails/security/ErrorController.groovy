package grails.security

class ErrorController {

  def index() {}

  def internalServerError() {
    response.status = 500
    render(contentType: 'application/json') {
      error = response.status
      message = 'Internal server error'
    }
  }

  def notFound() {
    response.status = 404
    render(contentType: 'application/json') {
      error = response.status
      message = 'Not found'
    }
  }

  def notAllowed() {
    response.status = 401
    render(contentType: 'application/json') {
      error = response.status
      message = 'Not allowed'
    }
  }
}
