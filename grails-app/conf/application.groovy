grails.plugin.springsecurity.filterChain.chainMap = [

    //Stateless chain
    [
        pattern: '/api/**',
        filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
    ]

]
grails.plugin.springsecurity.rest.token.storage.useGorm = true
grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName = 'grails.security.AuthenticationToken'
grails.plugin.springsecurity.useSecurityEventListener = true
grails.plugin.springsecurity.userLookup.userDomainClassName = 'grails.security.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'grails.security.UserRole'
grails.plugin.springsecurity.authority.className = 'grails.security.Role'