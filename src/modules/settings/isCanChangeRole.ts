export const isCanChangeRole = (cardUserId: string, currentUserId?: string) => {
    if (!currentUserId) return false
    if (cardUserId === currentUserId) {
        return false
    }
    return true
}
