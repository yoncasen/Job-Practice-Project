import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
    'auth/loginAsync',
    async (payload) => {

        let formData = new FormData();
        formData.append('CompanyCode', payload.companyCode)
        formData.append('Username', payload.username)
        formData.append('Password', String(payload.password))
    
        // "/Auth" requires body to be formData including company code, username, password 
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

        //uses token received by login fetch
        const access_token = payload.token

        //Companies with false isActive value are not listed with getAll fetch
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
	'user/addCompanyAsync',
	async (payload) => {

        const access_token = payload.accessToken
        const companyCode= payload.companyCode
        const companyName= payload.companyName
        const isActive= payload.isActive
        const modifierUserId= payload.modifierUserId
        
        // "/Company/Add" requires a body including 
        // company code, 
        // company name,
        // isActive value, 
        // and userID belongs to the user who adds the company 
		const resp = await fetch('http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Company/Add',{
            method: 'POST',    
            headers: {
                'Authorization' : `Bearer ${access_token}`
                ,'content-type': 'application/json'
            },
            body: JSON.stringify({
                companyCode: companyCode,
                companyName: companyName,
                isActive: isActive,
                modifierUserId: modifierUserId
            })
        });
		if (resp.ok) {
			const company = {
                companyCode: companyCode,
                companyName: companyName
            }
			return {company};
		}
        else if (!resp.ok){
            //eger add yapamıyorsam 
            //eklemeye calıstıgım companycode a sahip sirket 
            //databasede var demektir sadece isActive degeri false yapılmıstır

            //if !resp.ok
            //find the company in database
            //fetch put method with is active = true

            // const company = payload.companies.find(company => company.companyCode = payload.companyCode)
            
            // console.log("company VAR", company)

            // const resp = await fetch('http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Company/Update',{
            //     method: 'PUT',    
            //     headers: {
            //         'Authorization' : `Bearer ${access_token}`
            //         ,'content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         companyCode: companyCode,
            //         companyName: companyName,
            //         isActive: true,
            //         modifierUserId: company.modifierUserId,
            //         createdDate: company.createdDate,
            //         excelMessage: company.excelMessage
            //     })
            // });
            // if (resp.ok) {
            //     const company = {
            //         companyCode: companyCode,
            //         companyName: companyName
            //     }
            //     return {company};
            // }
        } 
	}
);

export const deleteCompanyAsync = createAsyncThunk(
    'user/deleteCompanyAsync',
    async(payload) => {

        const access_token = payload.accessToken
        const companyId = payload.id

        //DELETE fetch does not delete the company completely, 
        //just changes the isActive value to false
        //Companies with false isActive value are not listed with getAll fetch
        const resp = await fetch(`http://192.168.12.12/ErpBagimsizMobileSiparisBackend/api/Company/Delete/${companyId}`,{
            method: 'DELETE',    
            headers: {
                'Authorization' : `Bearer ${access_token}`
            }
        });
		if (resp.ok) {
			return { id : companyId };
		}
    }
)


export const userSlice = createSlice({

    name : 'user',

    initialState: {
        user: null,
        isLoggedIn: false,
        token: null,
        companies: []
    },

    reducers : {

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
            //temporary company object added to the companies list 
            //it will be replaced with the real one after getCompanies fetch
			state.companies.push(action.payload.company);
		},

        [deleteCompanyAsync.fulfilled]: (state, action) => {
            // deletes company with the given ID from companies array in the state 
            const companies = state.companies.filter((company) => company.companyId !== action.payload.id)
            state.companies = companies
            return state
		},
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;