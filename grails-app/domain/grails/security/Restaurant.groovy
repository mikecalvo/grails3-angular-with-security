package grails.security

import grails.rest.Resource

@Resource(uri='/api/restaurants', formats = ['json', 'xml'])
class Restaurant {

  String name
  String city
  String state

  static constraints = {
    state inList: ['FL', 'IL', 'MN', 'WI']
  }
}
