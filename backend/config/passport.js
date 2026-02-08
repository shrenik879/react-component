const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (_, __, profile, done) => {
      let user = await User.findOne({ email: profile.emails[0].value });

      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          provider: "google",
        });
      }

      done(null, user);
    }
  )
);

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     async (_, __, profile, done) => {
//     //   let user = await User.findOne({ email: profile.emails?.[0]?.value });
//     let user = await User.findOne({ githubId: profile.id });


//       if (!user) {
//         user = await User.create({
//           name: profile.username,
//           email: profile.emails?.[0]?.value || `${profile.username}@github`,
//           provider: "github",
//            password: "OAUTH_USER",
//         });
//       }

//       done(null, user);
//     }
//   )
// );

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     async (_, __, profile, done) => {
//       try {
//         // 🔑 Always find by provider + providerId
//         let user = await User.findOne({
//           provider: "github",
//           providerId: profile.id,
//         });

//         if (!user) {
//           user = await User.create({
//             name: profile.username,
//             email: profile.emails?.[0]?.value || null, // ✅ NO FAKE EMAIL
//             provider: "github",
//             providerId: profile.id,
//           });
//         }

//         return done(null, user);
//       } catch (err) {
//         return done(err, null);
//       }
//     }
//   )
// );
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
      scope: ["user:email"],
    },
    async (_, __, profile, done) => {
      // 🔥 GitHub may not send email
      let email =
        profile.emails?.find((e) => e.primary && e.verified)?.value ||
        profile.emails?.[0]?.value ||
        `${profile.id}@github.local`; // ✅ guaranteed unique fallback

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name: profile.username,
          email,
          provider: "github",
          role: "user",
        });
      }

      done(null, user);
    }
  )
);


module.exports = passport;
