import { Paper, Title, Text } from "@mantine/core"


const ProfileCard = ({ userName, userId }: { userName: string, userId: string }) => {

    return (
        <div className="px-5 w-full max-w-lg min-w-xs text-white">
            <Paper p="sm" radius="xs" bg="rgba(0, 0, 0, 0)" className="border-1 border-gray-300/10 ">
                <Title order={2} className="font-mono">{userName}</Title>
                <Text size="md" c="gray" >{`${userName}#${userId}`}</Text>
                <div className="flex items-baseline gap-2">
                    <div className="flex items-baseline gap-1">
                        <Text size="xs">Followers:</Text>
                        <Text size="xs" className="font-bold">1k</Text>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <Text size="xs">Following:</Text>
                        <Text size="xs" className="font-bold">1k</Text>
                    </div>
                </div>
                <div className="pt-2">
                    <Text size="xs">Some testing bio that includes all kinds of interesting things...</Text>
                </div>
            </Paper>
            <div className="text-sm font-bold pb-2">
                Posts:
            </div>
        </div>
    )
}

export default ProfileCard