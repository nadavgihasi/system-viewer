import {Team} from "../types/team";

export const getTeams = (): Array<Team> => [
    new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }), new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }), new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),new Team({
        id: '1',
        name: 'אולטרה',
        numberOfServers: 12,
        numberOfSystems: 100,
        info: "Interesting info"
    }), new Team({
        id: '2',
        name: 'וונום',
        numberOfServers: 1,
        numberOfSystems: 10,
        info: "Interesting info"
    }),
];

export const deleteTeamApi = (teamId: string) => {
    console.log(`team with id: ${teamId} deleted`)
};