import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const theme = createTheme();
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <form action="/action_page.php" method="get">

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth label="Nome Completo" name="nome" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField required fullWidth label="Data de Nascimento" name="Data" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Gênero" name="genero" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Estado Civil" name="estadocivil" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Nome da Mãe" name="nomedamae" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Nome do Pai" name="nomedopai" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="CPF" name="cpf" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Escolaridade" name="escolaridade" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="RG" name="rg" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Órgão Emissor" name="orgaoemissor" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Data de Expedição" name="datadeexpedicao" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Email Address" name="email" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Tipo Sanguíneo" name="tiposanguineo" />
                <Divider />
              </Grid>
              <Grid item xs={3}>
                <TextField required fullWidth label="CEP" name="cep" />
              </Grid>
              <Grid item xs={9}>
                <TextField required fullWidth label="Endereço" name="endereco" />
              </Grid>
              <Grid item xs={3}>
                <TextField required fullWidth label="Número" name="Numero" />
              </Grid>
              <Grid item xs={9}>
                <TextField required fullWidth label="Bairro" name="bairro" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Complemento" name="complemento" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Contato" name="contato" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Dependentes" name="dependentes" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Situação" name="situacao" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Estado" name="estado" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Lotação" name="lotacao" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Função" name="funcao" />
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth label="Categoria Salarial" name="categoriasalarial" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Área" name="area" />
              </Grid>
              <Grid item xs={4}>
                <TextField required fullWidth label="Especialidade" name="especialidade" />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label="Nº da Matrícula" name="matricula" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">Salvar</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
