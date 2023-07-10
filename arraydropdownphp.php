<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Array Dropdown Php</title>
</head>

<body>

<form>
	<center>
		<select>
			<option> -- Employee Names -- </option>
			<?php
				$empNames = array("Jack","Adam","Jhonny","Anand","Charan");
				foreach ($empNames as $emp){
			?>
			<option><?php echo $emp; ?></option>
			<?php } ?>
		</select>
	</center>
</form>

</body>
</html>