import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)

	function toggle() {
		setIsOpen(!isOpen)
	}

	return { isOpen, toggle }
}
