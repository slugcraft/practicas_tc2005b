-- Calcular el costo total del proyecto a elegir 
CREATE PROCEDURE dblab15.CalcularCostoTotalProyecto(
		in NumProyecto int
)
begin
	select sum(m.precio * e.cantidad) 
	from materiales m natural join entregan e 
	where e.numero = NumProyecto;
end

-- Listar los materiales entregados en el proyecto
CREATE PROCEDURE dblab15.ListarMaterialesEntregadosProyecto(
		in p_numero int
)
begin
	select m.clave, m.descripcion, e.cantidad, e.fecha
	from materiales m natural join entregan e
	where e.numero = p_numero;
end

-- Cambia el estatus de nuestro proyecto de activo a pasado si la fecha de fin ya pasó con respecto a la fecha actual
CREATE PROCEDURE cambiarEstatus()
begin
	UPDATE APPIX.PROYECTO
	SET estatus = 0
	WHERE estatus = 1 AND f_fin < CURRENT_DATE;
end