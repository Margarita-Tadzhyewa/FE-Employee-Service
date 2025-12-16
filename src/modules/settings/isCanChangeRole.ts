export const isCanChangeRole = (cardUserId: string, currentUserId?: string) => {
    if (!currentUserId) return false
    if (cardUserId === currentUserId) {
        alert('you cannot change your own role')
        return false
    }
    return true
}
