export const setDashboardData = (data) => {
    return {
        type: 'DASHBOARD_DATA',
        payload: data
    }
};

export const setMetaData = (data) => {
    return { 
        type: 'API_DATA',
        payload: data
    }
}