import { Strategy as JwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import passport from 'passport'
import AuthService from '../../service/auth.service.js'

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "welcomeBook",
},
    async function (jwt_payload, done) {
        try {
            const authService = new AuthService()
            const user = authService.validateUser(jwt_payload.email);
            if (user) {
                return done(null, user);
            } else {
                done(null, null);
            }
        } catch (error) {
            done(error);
        }
    }
))
