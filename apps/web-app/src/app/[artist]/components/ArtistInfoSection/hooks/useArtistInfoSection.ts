import { User, UserPartial } from "@/models/logic/user.model"
import { useState } from "react"

export const useArtistInfoSection = (defaultUserData: User) => {
    const [currentUserData, setCurrentUserData] = useState<User>(defaultUserData)
    const [editMode, setEditMode] = useState(false)
    const [loadingForm, setLoadingForm] = useState(false)

    const updateCurrentUserData = (newUserData: UserPartial) => {
        setCurrentUserData(prev => {
            return {
                ...prev,
                ...newUserData
            }
        })
    }

    const toggleEditMode = (newValue?: boolean) => {
        setEditMode(prev => newValue ?? !prev)
    }

    const toggleLoadingForm = (newValue?: boolean) => {
        setLoadingForm(prev => newValue ?? !prev)
    }

    return { currentUserData, updateCurrentUserData, editMode, toggleEditMode, loadingForm, toggleLoadingForm }
}