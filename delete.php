<?php

    if(!empty($_GET['id'])){

        include_once('banco.php');

        $del = $_GET['id'];

        $sqlsell = "SELECT * FROM tb_pedido_cp WHERE Id_pedido=$del";

        $resultsell = $instability->query($sqlsell);
        
        if($resultsell->num_rows > 0 ){

            $deletePd = "DELETE FROM tb_pedido_cp WHERE Id_pedido=$del";
        
            $delresult = $instability->query($deletePd);
        }
    }
    header('Location: index.php');
?>