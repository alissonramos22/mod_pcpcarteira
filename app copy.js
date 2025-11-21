class customAPP {
	constructor() {
		this.loadApp();
	
	}

	async loadApp(){	
		await sps.getCSS().then(async (res) => {
            await sps.loadDefaultSPS_CSS().then(async (res) => {
				this.appControl_clear();
				this.appData_clear();
                this.gui(); 
				this.buscaCarteira();   
            });
        });
	}

	appControl_clear() {
		this.appControl = {
			colunas: [
				{
					name: "Selecionar",
					title: `<INPUT TYPE = "checkbox" name = "selec_{dados_name}_todos" onchange = "sps.table_select_all('{dados_name}',this)" />`,
					selecMode: `<input type= "checkbox" name = "selec_{dados_name}_{rid}" disabled {checked}>`,
					editMode: `<input type= "checkbox" name = "selec_{dados_name}_{rid}" disabled {checked}>`,
					inputFilter: `<input type="checkbox" name="filter_{dados_name}_{column}" {checked}/>`,
					filterValue: '',
					inputFooter: '',
					tooltip:false,
					styleFunction: function(value, row) { 
						let classRow = [];
						if (value) classRow.push('is-row-selected');
						return [classRow, ['is-cell']]; 
					},
					formatFunction: (value, row) => row[0] //value
				},
				{
					name: "Status",
					title: "Status",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 1,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[1], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Mesa",
					title: "Mesa",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 2,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[2], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Vendedor",
					title: "Vendedor",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 3,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[3], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Nome",
					title: "Nome",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 4,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[4] ,//value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Data Emissão",
					title: "DEM",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 5,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[5], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Ordem de Venda",
					title: "PVD",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 6,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[6], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Linha",
					title: "LPV",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 7,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[7], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Ferramenta",
					title: "Ferramenta",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 8,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[8], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Liga",
					title: "Liga",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 9,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[9], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Corte",
					title: "Corte",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 10,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[10],//value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Acabamento",
					title: "ACT",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 11,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[11], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Serviço",
					title: "SV",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterColumn:37,
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[37], //value,
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Pedido.PCs",
					title: "PPCs",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 12,
					tooltip:true,
					inputFooter: '<b><span sum_col="{col}" dados_name="{dados_name}" colunas="colunas" justSelected=true>0</span></b>',
					styleFunction: (value, row) => [[], ['is-cell','is-pedido']],
					formatFunction: (value, row) => sps._formatNumber(row[12]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Pedido.KG",
					title: "PKG",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 13,
					tooltip:true,
					inputFooter: '<b><span sum_col="{col}" dados_name="{dados_name}" colunas="colunas" justSelected=true>0</span></b>',
					styleFunction: (value, row) => [[], ['is-cell','is-pedido']],
					formatFunction: (value, row) => sps._formatNumber(row[13]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Produzido.PCs",
					title: "PDP",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 14,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => {
						let classRow = []
						let classCell = ['is-cell','is-produzido']

						if (value > 0) classCell.push('is-clickable')

						return [classRow, classCell]
					},
					formatFunction: (value, row) => sps._formatNumber(row[14]), //value
					listenFunctions:[
						{
							listen:'click'
							,function: function(dados_name,col,rid,e){

								if (e.target.classList.contains('is-clickable')){
									this.getHistOP({dados_name,rid,e})
									return;
								}
								this.onClickLine({dados_name,rid,e})
							}.bind(this)
						}
					]
				},
				{
					name: "Produzido.KGs",
					title: "PDK",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 15,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-produzido']],
					formatFunction: (value, row) => sps._formatNumber(row[15]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Faturado.PCs",
					title: "FTP",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 16,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-faturado']],
					formatFunction: (value, row) => sps._formatNumber(row[16]),//value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Faturado.KGs",
					title: "FTL",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 17,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-faturado']],
					formatFunction: (value, row) => sps._formatNumber(row[17]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "a Produzir.PCs",
					title: "APP",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 18,
					inputFooter: '<b><span sum_col="{col}" dados_name="{dados_name}" colunas="colunas" justSelected=true>0</span></b>',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-produzir']],
					formatFunction: (value, row) => sps._formatNumber(row[18]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "a Produzir.KGs",
					title: "APK",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 19,
					inputFooter: '<b><span sum_col="{col}" dados_name="{dados_name}" colunas="colunas" justSelected=true>0</span></b>',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-produzir']],
					formatFunction: (value, row) => sps._formatNumber(row[19]), //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Est.Barras",
					title: "EBA",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 20,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[20], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Est.Separado",
					title: "ESA",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 21,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[21], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Planificado",
					title: "PLF",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 22,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[22], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Compras",
					title: "Compras",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 23,
					inputFooter: '',
					tooltip:true,
					hidden:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[23], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Ferr.Disponíveis",
					title: "FDI",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 24,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[24], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Prod.Planejado",
					title: "PPL",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 25,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[25], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Prod.Liberado",
					title: "PLI",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 26,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[26], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
					
				},
				{
					name: "Reposicao",
					title: "RP",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 27,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[27], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Prod.Serra",
					title: "PSE",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 28,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-jacutinga']],
					formatFunction: (value, row) => row[28], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Prod.Embalagem",
					title: "PEM",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 29,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-jacutinga']],
					formatFunction: (value, row) => row[29], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Rej.Embalagem",
					title: "REM",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 30,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-jacutinga','is-rejeito']],
					formatFunction: (value, row) => row[30], //value
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Total.Transferido",
					title: "TRF",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 34,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => {
						let classRow = []
						let classCell = ['is-cell','is-sbc']

						if (row[34] > 0) classCell.push('is-clickable')

						return [classRow, classCell]
					},
					formatFunction: (value, row) => row[34],
					listenFunctions:[
						{
							listen:'click'
							,function: function(dados_name,col,rid,e){

								if (e.target.classList.contains('is-clickable')){
									this.getCargas({dados_name,rid,e})
									return;
								}
								this.onClickLine({dados_name,rid,e})
							}.bind(this)
						}
					]
				},
				{
					name: "Aguard.Acabamento",
					title: "AAC",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 35,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-sbc']],
					formatFunction: (value, row) => row[35],
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Acab.Produzido",
					title: "ACP",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 31,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-sbc']],
					formatFunction: (value, row) => row[31],
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "Liberado.Faturamento",
					title: "LFT",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					filterColumn: 36,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], ['is-cell','is-faturar']],
					formatFunction: (value, row) => row[36],
					listenFunctions:[
					{
						listen:'click'
						,function: function(dados_name,col,rid,e){
						 this.onClickLine({dados_name,rid,e})
						}.bind(this)
					}
				]
				},
				{
					name: "UltimoStatus",
					title: "US",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}"/>',
					filterValue: '',
					filterColumn: 32,
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => row[32],
					listenFunctions:[
						{
							listen:'click'
							,function: function(dados_name,col,rid,e){
							this.onClickLine({dados_name,rid,e})
							}.bind(this)
						}
					]
				}
				],
			histOP:[
				{
					name: "selec",
					title: ``,
					selecMode: ``,
					editMode: ``,
					inputFilter: `<input type="checkbox" name="filter_{dados_name}_{column}" {checked}/>`,
					filterValue: '',
					inputFooter: '',
					styleFunction: function(value, row) { return [[], ['is-cell']]; },
					formatFunction: function(value) { return value; }
				},
				{
					name: "Tipo",
					title: "Tipo",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => {
						let classRow = [];	
						
						classRow.push(`is-row-${value.toLowerCase().replace(' ','_')}`)
						
						return [classRow, []]
					},
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Plano",
					title: "Plano",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Operação",
					title: "Operação",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Inicio",
					title: "Inicio",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Fim",
					title: "Fim",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Peças",
					title: "Peças",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Protocolo",
					title: "Protocolo",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Ferramenta",
					title: "Ferramenta",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Recurso",
					title: "Recurso",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				}
			]
			,cargas:[
				{
					name: "selec",
					title: ``,
					selecMode: ``,
					editMode: ``,
					inputFilter: `<input type="checkbox" name="filter_{dados_name}_{column}" {checked}/>`,
					filterValue: '',
					inputFooter: '',
					styleFunction: function(value, row) { return [[], ['is-cell']]; },
					formatFunction: function(value) { return value; }
				},
				{
					name: "Carga",
					title: "Carga",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: function(value, row) { return [[], ['is-cell']]; },
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Data",
					title: "Data Carga",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Etiqueta",
					title: "Etiqueta",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Quantidade",
					title: "Quantidade",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "Conferido",
					title: "Conferido",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "DataConferencia",
					title: "Data Conferencia",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				},
				{
					name: "ConferidoPor",
					title: "ConferidoPor",
					selecMode: '{value}',
					editMode: '{value}',
					inputFilter: '<INPUT TYPE="text" name="filter_{dados_name}_{column}" value="{filter}"/>',
					filterValue: '',
					inputFooter: '',
					tooltip:true,
					styleFunction: (value, row) => [[], []],
					formatFunction: (value, row) => value,
					listenFunctions:[]
				}
			]
			,fRecursivo:async function({acao,rows}){

				if (rows.length) {
					let row = rows[0];
					let newRows = rows.slice(1, rows.length);

					let dados={
						get:"postAux",
						acao:acao,
						id_pedidos:row[33],
						quantity:row[18],
						filter:""
					}
					await this.setAux(dados,this.appControl.fRecursivo,{acao:acao,rows:newRows});
				}else{					
					this.appData_clear()
					await this.buscaCarteira().then(async (res) => {
						this.applyFilter()
					})
				}		
				
			}.bind(this)
			,fLiberar:async function({acao,rows}){
				let dados={
					get:"postAux",
					acao:acao,
					id_pedidos:null,
					quantity:null,
					filter:"",
					list_pedidos: JSON.stringify(rows.map(x=>x[33]))
				}

				let fConcluir = async function(param){
					this.appData_clear();
					await this.buscaCarteira().then(async (res) => {
						this.applyFilter();
					})
				}.bind(this)

				await this.setAux(dados,fConcluir,{});
			}.bind(this)
		}

	
	}
	appData_clear() {
		// We clear all appData we stored previously
		this.appData = {
			carteira: [],
			carteiraFiltered: null,
			carteiraSelected: null
		};
	}
	gui() {
		// Using the UI.js library we create an input field and the container for a data grid
		let html = "";
		html += `<div class="box"> <div id="tCarteira"/></div>`;
		// Finally we render the app into the app container
		document.getElementById("app-container").innerHTML = html;
		document.getElementById("app-container").setAttribute('class','is-carteira-container')

		let buttonExcel = '<button class="button is-link nav-submit" style="margin-right:25px;background-color:darkgreen" id="appExcel"><span class="icon is-medium"><i class="fa fa-file-excel" aria-hidden="true"></i></span></button>';
		let buttonRefresh = '<button class="button is-link nav-submit" style="margin-right:25px;background-color:darkblue" id="appRefresh"><span class="icon is-medium"><i class="fa fa-retweet" aria-hidden="true"></i></span></button>';
		let buttonLiberarExtrusao = '<button class="button is-link nav-submit" style="margin-right:25px;background-color:darkblue" disabled=""  id="appLiberar"><span class="icon is-medium"><i class="fa fa-industry" aria-hidden="true"></i></span><span>Liberar Extrusão</span></button>';
		let buttonRemoverLiberar = '<button class="button is-link nav-submit" style="margin-right:25px;background-color:red" disabled=""  id="appRemover"><span class="icon is-medium"><i class="fa fa-trash" aria-hidden="true"></i></span><span>Remover</span></button>';
		let buttonSave = '<button class="button is-link nav-submit" disabled="" id="appSave"><span class="icon is-medium"><i class="fa fa-check" aria-hidden="true"></i></span><span>Salvar</span></button>'
			
		document.getElementById('appSave').parentNode.innerHTML=buttonExcel+buttonRefresh+buttonLiberarExtrusao+buttonRemoverLiberar+buttonSave


		//ux.listen('click',"dataCalendario-rbutton",function (e) { this.gerarCalendario(); }.bind(this));
		//ux.listen('keyup',"dataCalendario",function (e) {if(e.keyCode === 13) { this.gerarCalendario();} }.bind(this));
		// Save all data
		ux.listen('click', "appSave", function (e) { this.saveAll(); }.bind(this));
		ux.listen('click', "appLiberar", function (e) { this.liberarAll(); }.bind(this));
		ux.listen('click', "appRemover", function (e) { this.removerAll(); }.bind(this));
		ux.listen('click', "appRefresh", function (e) { 
			this.buscaCarteira().then((res) => {
				//this.createTable();
			})

		}.bind(this));
		//this.createTable();
	}

	checkAll(){
		this.appData.carteiraSelected = this.appData.carteira.filter(x=> x[0]===1);
	
		if (this.appData.carteiraSelected.length){
			ux.set("appLiberar","enable");
			ux.set("appRemover","enable");
		}else{
			ux.set("appLiberar","disabled"); 
			ux.set("appRemover","disabled");	
		}

	}

	onClickLine({dados_name, rid,e}){
		if (!e.shiftKey){
			let f = document.getElementsByName(`selec_${dados_name}_${rid}`)[0]
			sps.table_select_onclick(dados_name,rid,f,true);
		}
	}

	async buscaCarteira(){

		let dados_name = 'carteira';

		let data = {
			get:"getAux",
			acao:"getCarteira",
			id_pedidos:"null",
			quantity:"null",
			filter:"",
			dg_limit:99999,
			dg_page:1
		}

		await sps.getAux(data,'carteira',this.appData).then(async (res) => {
				await this.viewCarteira(dados_name,'tCarteira');
			})
	}

	viewCarteira(dados_name,container){
		sps.table_Create({
			colunas:this.appControl.colunas
			,container:container
			,classType:'is-sps-table-v1'
			,mode: this.appData.mode||'selecMode'
			,dados_name:dados_name
			,clear:true
			,excel:{filename: `output`, func: (e) => {},loadTable:true}
			,limitRows:7000
			,applyfilterOnBlur:false
			,applyfilterOnChange:false
		})
	}

	async getHistOP({dados_name,rid,e}){
		
		let row = app.appData[`${dados_name}Filtered`][rid]

		let dados = {
			get:'getAux',
			acao:'getHistOP',
			id_pedidos:row[33],
			quantity:0,
			filter:'',
			dg_limit:9999,
			dg_page:1		
		}

		
		this.appData.histOP = null;
		this.appData.histOPFiltered = null;	
		await sps.getAux(dados,'histOP',this.appData).then((res)=>{
			this.viewHistOP(row)
		});
	}

	viewHistOP(row){
		let html = 
		'<div id="histOP"></div>'
		ux.dialog(`${row[4]} Pedido ${row[6]}/${row[7]} - ${row[8]} ${row[9]} ${row[10]} ${row[11]} `, html, {id:'histOpDialog'});

		sps.table_Create({
			colunas:this.appControl.histOP,
			container:'histOP',
			classType:'is-sps-table-v1',
			mode:'selecMode',
			dados_name:'histOP',
			clear:true
		})
	}

	async getCargas({dados_name,rid,e}){
		
		let row = app.appData[`${dados_name}Filtered`][rid]

		let dados = {
			get:'getAux',
			acao:'getCargas',
			id_pedidos:row[33],
			quantity:0,
			filter:'',
			dg_limit:9999,
			dg_page:1		
		}

		
		this.appData.cargas = null;
		this.appData.cargasFiltered = null;	
		await sps.getAux(dados,'cargas',this.appData).then((res)=>{
			this.viewCargas(row)
		});
	}

	viewCargas(row){
		let html = 
		'<div id="cargas"></div>'
		ux.dialog(`Cargas - ${row[4]} Pedido ${row[6]}/${row[7]} - ${row[8]} ${row[9]} ${row[10]} ${row[11]} `, html, {id:'cargasDialog'});

		sps.table_Create({
			colunas:this.appControl.cargas,
			container:'cargas',
			classType:'is-sps-table-v1',
			mode:'selecMode',
			dados_name:'cargas',
			clear:true
		})
	}

	saveAll(){
		//ux.loading(true);	
		//this.appControl.fRecursivo({rows:this.appData.carteiraSelected});
		console.log('Desabilitado!');
	}

	liberarAll(){
		ux.loading(true);	
		this.appControl.fLiberar({acao: 'requerimento',rows:this.appData.carteiraSelected});
	}

	removerAll(){
		ux.loading(true);	
		this.appControl.fLiberar({acao: 'remover_requerimento',rows:this.appData.carteiraSelected});
	}

	async getAux(dados, grid) {
		ux.apost('?program_id=' + appInfo.gid + '&page=' + appInfo.appID
			, dados
			, function (err, result) {
				if (!ux.aError(result, true)) {
					if (result.value.length > 0) {
						app.appData[grid] = result.value;
					} else {
						app.appData[grid] = [];
					}
				} else {
					app.appData[grid] = [];
				}
			}
			, {
				timeout: 180000
				, loading: true
			}
		);
		await ux.wait(); 
		return await Promise.resolve(false);
	}

	async setAux(dados, func = null,param={}) {
		ux.apost('?program_id=' + appInfo.gid + '&page=' + appInfo.appID
			, dados
			, async function (err, result) {
				if (!ux.aError(result, true)) {
					if (result.value[0][0] == 'Sucesso') {
						await func(param)
					} else {
						console.log(result.value[0][0])
					}
				} else {
					console.log(result.value[0][0])
				}
			}
			, {
				timeout: 180000
				, loading: true
			}
		);

		await ux.wait(); 
		return await Promise.resolve(false);
	}
}
var app = new customAPP;