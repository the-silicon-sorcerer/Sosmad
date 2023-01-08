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
        id: 2
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }]
    },
    {
        id: 3,
        username: "Kevin Parks",
        profilePic: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        currentStories: [{ storyImage: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }]
    }
]