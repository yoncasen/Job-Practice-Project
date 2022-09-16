import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
    'auth/loginAsync',
    async (payload) => {

        let formData = new FormData();
        formData.append('CompanyCode', payload.companyCode)
        formData.append('Username', payload.username)
        formData.append('Password', String(payload.password))
    
        const resp = await fetch('http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Auth',{
            method: 'POST',
            body: formData 
        })
            
        if (resp.ok) {
            const response = await resp.json();
            return { response };
        }              
    }
)

export const getCompaniesAsync = createAsyncThunk(
	'user/getCompaniesAsync',
	async (payload) => {

        const access_token = payload.token

		const resp = await fetch('http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Company/getAll',{
            headers: {
                'Authorization' : `Bearer ${access_token}`
            }
        });

		if (resp.ok) {
			const companies = await resp.json();
			return { companies };
		}
	}
);

export const addCompanyAsync = createAsyncThunk(
	'user/addCompaniesAsync',
	async (payload) => {

        const access_token = payload.token

        ////////////////////////
        // WHAT IS THE ADDRESS FOR ADDING COMPANY
        //////////////////////
		const resp = await fetch('http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Company/',{
            method: 'POST',    
            headers: {
                'Authorization' : `Bearer ${access_token}`
            }
        });
		if (resp.ok) {
			const company = await resp.json();
			return {company};
		}
	}
);


export const userSlice = createSlice({

    name : 'user',

    initialState: {
        user: null,
        isLoggedIn: false,
        token: null,
        companies: []
    },

    reducers : {

        // logout: (state) => {
        //     state.user = null
        //     state.isLoggedIn = false
        // }

    },
    extraReducers:{

        [loginAsync.fulfilled] : (state, action) => {

            state.user = action.payload.response.user
            state.token = action.payload.response.token

            if (state.user) { 
                state.isLoggedIn = true 
                return state
            } else { 
                console.log("password or username is wrong")
                return state
            }

        },

        [getCompaniesAsync.fulfilled]: (state, action) => {
            state.companies = action.payload.companies
			return state;
		},

        [addCompanyAsync.fulfilled]: (state, action) => {
			state.push(action.payload.companies);
		},
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;