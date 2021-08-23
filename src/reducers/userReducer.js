export default function userReducer(
	state = { loggedUser: {}, tweets: [], profile: {} },
	action
) {
	switch (action.type) {
		case "SET_LOGGED_USER": {
			return { loggedUser: action.payload, tweets: [], profile: {} };
		}
		case "SET_USER": {
			return { ...state, profile: action.payload };
		}
		case "SET_TWEETS": {
			return { ...state, tweets: action.payload };
		}
		case "CLEAR_DATA": {
			return {
				loggedUser: {},
				tweets: [],
				profile: {},
			};
		}
		case "CREATE_TWEET": {
			return {
				...state,
				tweets: [...state.tweets, action.payload],
				loggedUser: {
					...state.loggedUser,
					tweets: [...state.loggedUser.tweets, action.payload._id],
					tweetCount: state.loggedUser.tweetCount + 1,
				},
			};
		}
		case "SET_LIKE": {
			return {
				// ...state,
				loggedUser: {
					...state.loggedUser,
					tweetsLiked: [...state.loggedUser.tweetsLiked, action.payload],
				},
				tweets: state.tweets.map((item) => {
					if (item._id !== action.payload) {
						return { ...item };
					}
					return { ...item, likes: item.likes + 1 };
				}),
				profile: {
					...state.profile,
					tweetsLiked: [...state.profile.tweetsLiked, action.payload],
				},
			};
		}
		case "SET_UNLIKE": {
			return {
				...state,
				loggedUser: {
					...state.loggedUser,
					tweetsLiked: [
						...state.loggedUser.tweetsLiked.filter(
							(tweet) => tweet !== action.payload
						),
					],
				},

				tweets: state.tweets.map((item) => {
					if (item._id !== action.payload) {
						return { ...item };
					}
					return { ...item, likes: item.likes - 1 };
				}),
				profile: {
					...state.profile,
					tweetsLiked: [
						...state.profile.tweetsLiked.filter(
							(tweet) => tweet !== action.payload
						),
					],
				},
			};
		}
		case "SET_FOLLOW": {
			return {
				...state,
				loggedUser: {
					...state.loggedUser,
					following: [...state.loggedUser.following, action.payload],
					followingCount: state.loggedUser.followingCount + 1,
				},
			};
		}
		case "SET_UNFOLLOW": {
			return {
				...state,
				loggedUser: {
					...state.loggedUser,
					following: [
						...state.loggedUser.following.filter(
							(item) => item !== action.payload
						),
					],
					followingCount: state.loggedUser.followingCount - 1,
				},
			};
		}
		case "TWEET_DELETE": {
			return {
				...state,
				loggedUser: {
					...state.loggedUser,
					tweets: [
						...state.loggedUser.tweets.filter(
							(item) => item !== action.payload
						),
					],
					tweetsCount: state.loggedUser.tweets.length - 1,
				},
				tweets: [...state.tweets.filter((item) => item !== action.payload)],
			};
		}

		default:
			return state;
	}
}
