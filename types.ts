import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { Key } from "react";

export type ServerWithMembersWithProfiles = Server & {
    members: (Member) & {
        role: MemberRole;
        id: Key | null | undefined;
        profile: Profile 
}[]
}