import Image from "next/image"

interface ThemeImageProps {
    lightSrc: string
    darkSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

export default function ThemeImage({
    lightSrc,
    darkSrc,
    alt,
    width,
    height,
    className = "",
}: ThemeImageProps) {
    return (
        <>
            <Image
                src={lightSrc}
                alt={alt}
                width={width}
                height={height}
                className={`${className} dark:hidden`}
            />
            <Image
                src={darkSrc}
                alt={alt}
                width={width}
                height={height}
                className={`${className} hidden dark:block`}
            />
        </>
    )
}
