export interface UserData {
    id: number
    username: string
    profilePic: string
    currentStories: StoryData[]
}

export interface StoryData {
    storyImage: string
}

export const sampleData: UserData[] = [
    {
        id: 1,
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }]
    },
    {
        id: 2,
        username: "Katty Woodland",
        profilePic: "https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
    },
    {
        id: 3,
        username: "Carlos Hector",
        profilePic: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
    },
    {
        id: 4,
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }]
    },
    {
        id: 5,
        username: "Katty Woodland",
        profilePic: "https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
    },
    {
        id: 6,
        username: "Carlos Hector",
        profilePic: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }]
    }
]