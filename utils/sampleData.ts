export interface UserData {
    id: number
    username: string
    profilePic: string
    currentStories: StoryData[]
    currentPosts: PostData[]
}

export interface PostData {
    image: string
    description: string
    comments: string
    likes: string
    postId: string
}

export interface StoryData {
    storyImage: string
}

export const sampleData: UserData[] = [
    {
        id: 1,
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }],
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: 'b2f87353-3617-4310-8fa2-d720587ef531'
        }]
    },
    {
        id: 2,
        username: "Katty Woodland",
        profilePic: "https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
        ,
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: '62888fe8-460a-43d3-a954-a76803f7f4a8'
        }]
    },
    {
        id: 3,
        username: "Carlos Hector",
        profilePic: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
        ,
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: '14d63b65-fb08-4c8c-9543-af7da122bdb4'
        }]
    },
    {
        id: 4,
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }],
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: 'b2f87353-3617-4310-8fa2-d720587ef531'
        }]
    },
    {
        id: 4,
        username: "Katty Woodland",
        profilePic: "https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
        ,
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: '62888fe8-460a-43d3-a954-a76803f7f4a8'
        }]
    },
    {
        id: 6,
        username: "Carlos Hector",
        profilePic: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
        ,
        currentPosts: [{
            image: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet..",
            comments: "120",
            likes: '321',
            postId: '14d63b65-fb08-4c8c-9543-af7da122bdb4'
        }]
    },
]